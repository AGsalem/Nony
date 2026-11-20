import Home from "./Home";
function NotFound() {
	
	return (
		<section className={`grid justify-center text-2xl `}>
			<h1>Page 404: Not Found</h1>
			<p>go <a href='/' className='text-blue-600'>Home</a></p>
		</section>
	);
}
export default NotFound