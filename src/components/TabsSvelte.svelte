<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script> 

<template>
<Tabs>
    <TabList>
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
    </TabList>
    <TabPanel>
        <div>
            <h3>Lorem Ipsum</h3>
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
        </div>
    </TabPanel>
    <TabPanel>
        <div>
            <h3>Duis autem</h3>
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
        </div>
    </TabPanel>
</Tabs>
</template>
