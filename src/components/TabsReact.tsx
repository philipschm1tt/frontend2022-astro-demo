import {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TabsReact() {
	const [tabIndex, setTabIndex] = useState(0);
	console.log(`Current Tab Index ${tabIndex}`)

return (
	<section class="container mx-auto py-10 px-4">
		<div class="prose prose-lg">
			<h2 class="mb-4">A basic tab component</h2>
			<Tabs selectedIndex={tabIndex} onSelect={(index) => {
				console.log(`Selecting Tab Index ${index}`)
				setTabIndex(index)
			}}>
					<TabList >
						<Tab>First Tab!!</Tab>
						<Tab>Second Tab</Tab>
					</TabList>
					<TabPanel >
						<h3>Tab One Panel</h3>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
							tempor
							invidunt
							ut
							labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
							justo
							duo
							dolores
							et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor
							sit amet.
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
							tempor
							invidunt
							ut
							labore et dolore magna aliquyam erat, sed diam voluptua.
						</p>
					</TabPanel>
					<TabPanel >
						<h3>Tab Two Panel</h3>
						<p>
							Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
							consequat,
							vel
							illum
							dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
							qui
							blandit
							praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
							ipsum
							dolor
							sit
							amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet
							dolore
							magna
							aliquam erat volutpat.
						</p>
					</TabPanel>
				</Tabs>
		</div>
	</section>
	)
}