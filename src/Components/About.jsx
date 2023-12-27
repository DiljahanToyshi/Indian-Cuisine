import React from 'react';

const About = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20
     lg:flex gap-8">
			<div className="lg:w-1/2 grid grid-cols-2 gap-3 mb-5">
				<figure className="relative h-40 w-40 md:h-56 lg:h-72 lg:w-64 overflow-hidden hover:scale-100">
					<img
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvye0WMrB6hiKmJ-rZhaJbV0Ja3Jpx2XroQ&usqp=CAU'					/>
				</figure>
				<figure className="relative h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<img
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/g4bCD6q/Creme-Brulee.jpg"
						alt=""
					/>
				</figure>
				<figure className="relative md:-mt-8 lg:-mt-0 h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<img
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03LdYMojxjxl57YK3ABopDGXEhTJABrWO3A&usqp=CAU'						alt=""
					/>
				</figure>
				<figure className="relative md:-mt-8 lg:-mt-0 h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<img
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/Tq7dMmb/Cumin-Lamb-Stir-Fry-1.jpg"
						alt=""
					/>
				</figure>
			</div>

			<div className=" lg:w-1/2 lg:pl-10 ">
				<h1 className="title-text "> An Overview of Indian Cuisine</h1>
				
                <p className='text-lg font-bold text-orange-600 bg-opacity-30 bg-slate-300  px-3'>Indian cuisine, a tapestry of diverse flavors and culinary traditions, mirrors the country's rich heritage and geographic variety. Influenced by regional specialties and historical legacies, it spans a wide spectrum of tastes and ingredients. North India boasts aromatic gravies and tandoori delights like butter chicken and biryani. South India's cuisine revolves around rice, coconut, and savory dosas. The western region offers diverse spices in Gujarati thalis, while the east specializes in mustard-based fish dishes and simpler yet flavorful meals. Central India embraces tribal influences with dishes like dal bafla. Spices like cumin, turmeric, and cardamom infuse these dishes with distinct aromas. Vegetarianism flourishes, offering lentils and vegetables in a myriad of flavorful preparations. Indian sweets like gulab jamun add a sweet finale. Street food delights with chaat and samosas, showcasing a vibrant culinary landscape that captivates with its richness and diversity.</p>
			</div>
		</div>
	);
};

export default About;