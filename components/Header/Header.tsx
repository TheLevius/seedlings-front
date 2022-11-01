export const Header = () => {
    return (
        <header>
            <div className="container flex justify-between">
                <nav className="flex justify-between items-center"><a href="#"><img src="" alt="logo" /></a></nav>
                <ul className="flex justify-between items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Address</a></li>
                </ul>
            </div>
        </header>
    )
}