import ReactTooltip from 'react-tooltip'
// <a> tag with no href attribute is specific to react tooltip library

const data = 'The Japanese House,<br />Frank Ocean,<br />Coheed & Camrbia,<br />Feist...<br />to name a few.'


function MusicDetails() {
    return (
        <span>
            <span
                data-for='main'
                data-tip={data}
                className='linkMock'>
                music
            </span>
            <ReactTooltip
                id="main"
                place={"top"}
                type={"dark"}
                effect={"solid"}
                multiline={true}
            />
        </span>
    )
}

export default MusicDetails
