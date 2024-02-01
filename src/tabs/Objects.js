import Circle from "../SVG/Circle"
import Square from "../SVG/Square"
import MenuTile from "../components/MenuTile"

const Objects = () => {
    const className = "grid grid-cols-2 auto-rows-min overflow-auto"
    return (
        <div className={className}>
            <MenuTile>
                <Circle x="50" y="50" r="25" style={{ "fill": "purple" }} />
            </MenuTile>
            <MenuTile>
                <Square l="50" x="50" y="50" fill="red"/>
            </MenuTile>
            <MenuTile>
                <Circle x="20" y="50" r="50" style={{ "fill": "blue" }} />
            </MenuTile>
        </div>
    )
}

export default Objects