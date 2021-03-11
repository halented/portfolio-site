import ReactTooltip from 'react-tooltip'

const data = 'The Japanese House,<br />Frank Ocean,<br />Coheed & Camrbia,<br />Feist...<br />to name a few.'

// causes HierarchyRequestError: Invalid insertion of STYLE node in #document node. when running yarn test
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
