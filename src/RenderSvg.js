import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {css, StyleSheet} from 'aphrodite';
import style from './style';
import DataSpan from './DataSpan';
import {SelectableGroup, createSelectable} from 'react-selectable';
import {PDFJS} from 'pdfjs-dist';

const SelectableComponent = createSelectable(DataSpan);

class RenderSvg extends Component{
    static displayName = 'RenderSvg';

    static propTypes = {
        file: PropTypes.any
    }

    constructor(props){
        super(props);
        this.onGetPages = (file) => this.getPages(file);
        this.onExtractTextData = (ctx, page) => this.extractTextData(ctx, page);
        this.onHandleSelection = (selectedKeys) => this.handleSelection(selectedKeys);
        this.state = {
            file: '',
            dataSpans: [],
            selectedKeys: []
        };
    }

    componentWillReceiveProps(nextProps){
        return nextProps.file && (this.state.file !== nextProps.file) && this.getPages(nextProps.file);
    }

    componentDidUpdate(prevProps, prevState){
        this.state.file !== prevState.file && this.getPages(this.state.file);
    }

    handleSelection(selectedKeys){
        console.log(selectedKeys);
        this.setState({selectedKeys});
    }

    extractTextData(ctx, page){
        const dataSpan = [];
        const viewport = page.getViewport(1);
        const pageContainer = document.getElementById('svgWrap');
        pageContainer.style.width = `${viewport.width}px`;
        pageContainer.style.height = `${viewport.height}px`;
        // document.getElementById('container_preview').appendChild(pageContainer);

        page.getTextContent({normalizeWhitespace: true}).then((textContent) => {
            textContent.items.forEach((textItem) => {
                const tx = PDFJS.Util.transform(
                    PDFJS.Util.transform(viewport.transform, textItem.transform),
                    [1, 0, 0, -1, 0, 0]
                );
                const style = textContent.styles[textItem.fontName];

                // adjust for font ascent/descent
                const fontSize = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
                if(style.ascent){
                    tx[5] -= fontSize * style.ascent;
                }else if(style.descent){
                    tx[5] -= fontSize * (1 + style.descent);
                }else{
                    tx[5] -= fontSize / 2;
                }

                // adjust for rendered width
                if(textItem.width > 0){
                    ctx.font = `${tx[0]}px ${style.fontFamily}`;

                    const width = ctx.measureText(textItem.str).width;
                    if(width > 0){
                        tx[0] = (textItem.width * viewport.scale) / width;
                    }
                }

                const item = {
                    textContent: textItem.str,
                    style: {
                        fontFamily: style.fontFamily,
                        fontSize: `${fontSize}px`,
                        transform: `scaleX(${tx[0]})`,
                        left: `${tx[4]}px`,
                        top: `${tx[5]}px`,
                        width: `${textItem.width * viewport.scale}`,
                        height: `${textItem.height}`
                    }
                };
                dataSpan.push(item);
            });
            this.setState({dataSpans: dataSpan});
        });
    }

    getPages(file){
        PDFJS.getDocument(`/${file.name}`).then((pdf) => {
            const ctx = document.createElement('canvas').getContext('2d', {alpha: false});
            for(let i = 1; i <= pdf.numPages; i++){
                pdf.getPage(i).then((page) => {
                    this.extractTextData(ctx, page);
                });
            }
        });
    }

    render(){
        const datas = !!this.state.dataSpans && this.state.dataSpans;

        return (
            <div id={'svgWrap'}
                 className={css(style.wrapper)}>
                <SelectableGroup onSelection={this.onHandleSelection}
                                 className={css(style.wrapper)}
                                 fixedPosition={Boolean(true)}
                                 style={{width: '100%', height: '100%'}}>
                    {datas.map((value, index) => {
                        const selected = this.state.selectedKeys.indexOf(value.id) > -1;
                        return (
                            <SelectableComponent key={index}
                                                 selected={selected}
                                                 selectableKey={value.textContent}
                                                 customStyle={value.style}
                                                 textContent={value.textContent} />
                        );
                    })}
                </SelectableGroup>
            </div>
        );
    }
}

export default RenderSvg;
