import Carousel from 'nuka-carousel';

export default function CarouselReact() {
	return (
		<Carousel>
			{
				[1, 2, 3, 4, 5].map((number, index) =>
					<div key={index} className="h-40 bg-blue-400 relative">
						<h3 className="my-0 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{number}</h3>
					</div>)
			}
		</Carousel>
	)
}
