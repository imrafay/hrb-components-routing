import Accordion from "../components/Accordion";

function AccordionPage() {
    const values = [
        {
            label:"Heading Accordion 1",
            content:"Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1"
        },

        {
            label:"Heading Accordion 2",
            content:"Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1"
        },

        {
            label:"Heading Accordion 3",
            content:"Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1Heading Accordion 1"
        },
    ]

    return (
      <Accordion values={values}/>
    );
  }
  
export default AccordionPage;