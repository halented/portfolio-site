import ReactTooltip from 'react-tooltip'

const data = 'The Japanese House,<br />Frank Ocean,<br />Coheed & Camrbia,<br />Feist...<br />to name a few.'

function MusicDetails() {
    return (
        <>
            <a
                data-for='main'
                data-tip={data}>
                music
            </a>
            <ReactTooltip
                id="main"
                place={"top"}
                type={"dark"}
                effect={"solid"}
                multiline={true}
            />
        </>
    )
}

export default MusicDetails
