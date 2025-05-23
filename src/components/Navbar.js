
// import { Link } from 'react-router-dom';


// const app_logo192 = "logo192.png"

export default function Navbar(props) {
    const public_url = process.env.PUBLIC_URL
    const mode = props.mode
    const capFirstLetter = (str) => {
        let arr = str.split("")
        let [l1, ...rest] = arr
        l1 = l1.toUpperCase()
        return (l1 + rest.join(""))
    }
    let text_mode = () => {
        if (mode === "dark") {
            return "text-light"
        }
        return "text-dark"
    }
    const showActive = (e) => {
        document.getElementsByClassName('nav-link active')[0].classList.remove("active")
        e.target.classList.add('active')

    }
    console.log(process.env.PUBLIC_URL + "/logo246.png")
    // console.log(props)
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <img src={public_url + "/logo246.png"} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                    <a className="navbar-brand" href={public_url}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a onClick={showActive} className="nav-link active" href={public_url}>Home</a>
                            </li>

                        </ul>
                    </div>
                    <div className={`${text_mode()} nav-item form-check form-switch my-3`}>
                        <input onChange={props.toggleModeFunc} className="form-check-input" type="checkbox" value="" id="switchBox" />
                        <label className="form-check-label" htmlFor="checkNativeSwitch">
                            {capFirstLetter(mode)} Mode
                        </label>
                    </div>
                </div>
            </nav>
            <div id="mainContainer" className="container my-3">
            </div>
        </>
    )
}
// Navbar.defaultProps = {
//     title: 'HelloWorld',
//     aboutUs: "No about set"
// }
