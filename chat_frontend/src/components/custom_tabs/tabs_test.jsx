import Tabs from './index';


function TabsTest() {
    return (
        <h1>Test</h1>
    );
}


export default function TabsTestFinal() {
    const tabs_data = [
        {
            title: "Tab 1",
            content: "This is the content of Tab 1"
        },
        {
            title: "Tab 2",
            content: "This is the content of Tab 2"
        },
        {
            title: "Tab 3",
            content: "This is the content of Tab 3"
        },
        {
            title: "Tab 4",
            content: <TabsTest />
    
        }
    ];

    function handleChange(activeTab) {
        console.log('Current tab' + activeTab);
    }

    return (
        <Tabs tabsContent={tabs_data} onChange={handleChange}/>
    )
}