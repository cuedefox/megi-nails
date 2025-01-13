export const ContactItem = ({logo, url, text}) => {
    return <div className="contact-item">
        <a href={url}>
            <img src={logo} alt="" />
            <button>{text}</button>
        </a>
    </div>
}