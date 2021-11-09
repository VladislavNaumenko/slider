
const SlideAside = ({title, subtitle, color}) => {

    return (
        <div style={{background: `${color}`}}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );

}

export default SlideAside;