{/** ChessName function */}
function ChessName(ChessName_props) {
    return <div>
        {/** Makes it so in the App.jsx I can rename it to for example, a rook or a bishop */}
        name={ChessName_props.name}
    </div>
}

export default ChessName
