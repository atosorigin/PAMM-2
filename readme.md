## *[Project Reference here]*
- [Overview](#overview)
- [Goals](#goals)
- [Drivers](#drivers)
- [Project Information](#project-information)

# Overview #
*Add here a description of the project explaining at high level what the project is about.*

*<b>Note:</b>  visio and graphml diagrams are provided in design folder if you require changes to suit your project*

### Goals

*Describe the project goals in a bullet point list:*

- Goal 1
- Goal 2
- Goal 3

### Drivers

*Describe the motivations that initiated the project in a bullet point list:*

- Driver 1
- Driver 2
- Driver 3

#Project Information#

*Include key project information, project milestones, links to project documentation, contacts.*

##### Milestones:
Delivery Date: *[dd/mm/yyyy]*

#### Documentation

- [Software Architecture](/docs/software-architecture.md)
- [Technology Architecture](/docs/technology-architecture.md) - *[High Level Design](/docs/high-level.md)*
- [Information Architecture](/docs/information-architecture.md)
- [Test Plan & Feature Catalogue](/docs/test-plan.md)
- [Appendix A - DDU Dev Process](/docs/dev-process.md)

### Risks and Assumptions:
*Describes any risks or assumption - link to new page if required*
<table>
<tr><th>Date</th><th>Description</th><th>Impact</th><th>Resolution</th></tr>
<tr><td>TBA</td><td>TBA</td><td>TBA</td><td>TBA</td></tr>
</table>

###Team and Contacts
<table>
<tr><th>Name</th><th>email</th><th>Role</th></tr>
<tr><td>TBA</td><td>tbar@atos.net</td><td>Delivery Manager</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Product Owner</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>BA</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Tester</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Technical Lead/Lead Developer</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>UX</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Software Architect</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Developer</td></tr>
<tr><td>TBA</td><td>tba@atos.net</td><td>Developer</td></tr>
</table>


import * as $ from "jquery";

 this.modal.alert()
                                .size('lg')
                                .showClose(true)
                                .title('A simple Alert style modal window')
                                .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
                                .open();