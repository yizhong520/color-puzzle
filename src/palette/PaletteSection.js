export function RenderPalette(props) {
    let palArray = props.palettesArray;
    let palettes = palArray.map((pal) => {
        return <RenderPaletteHF palette={pal} key={pal.fullAlt} />
    });
    return (
        <div className="row my-4 palette-section">
            {palettes}
        </div>
    );
}

export function RenderPaletteHF(props) {
    let imgHUrl = "./img/"+ props.palette.horz + ".png";
    let imgPUrl = "./img/"+ props.palette.full + ".jpg"
    return (
        <div className="col-12 col-xl-6">
            <div className="card card-no-shadow">
                <div className="cp-row">
                    <img src={imgHUrl} alt={props.palette.horzAlt} className="cp-palette-h" />
                    <img src={imgPUrl} alt={props.palette.fullAlt} className="cp-palette" />
                </div>
            </div>
        </div> 
    );
}