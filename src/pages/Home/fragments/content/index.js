import '../content/style.css';
function Content (prop) {
    return(
        <section  >
<h1 className='content-wrapper'>Home</h1>
<div className='content-field'>
    <p>{prop.nama}</p>
</div>

        </section>
    );
}
export default Content