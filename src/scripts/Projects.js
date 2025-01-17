/* projects.js
 *  exports a list of projects for the project selector on the home page
 *  each project has:
 *      name:   string, title of project in titlecase 
 *      types:  list of strings, tags associated with the projects
 *      url:    string, url of project page (route, website, or github link)
 *      image:  imported image file for the thumbnail of the project
 * 
 * Note: organic farm name generator and rpn calculator project currently excluded
 */

import trex from "../images/trex.jpg"
import um from "../images/um.png"
import network from "../images/network.jpg"
import colors from "../images/colors.png"
// import farm from "../images/farm.jpg"
import cat from "../images/cat.jpg"
// import rpn from "../images/rpn.jpg"


const projectConstructor = (name, types, url, image) => {
    return {
        name: name,
        types: types,
        url: url,
        image: image
    }
}

const PROJECTS = [
    projectConstructor("Spotify Artist Explorer", ["all", "javascript"],
        "/#/explorer", network),
    projectConstructor("Museum Employee Scheduler", ["all", "python"],
        "https://github.com/Marshall-Wilson/employee_scheduler", trex),
    projectConstructor("Universal Machine Emulator", ["all", "c"],
        "https://github.com/Marshall-Wilson/UM-Emulator", um),
    projectConstructor("Color Picker Animation", ["all", "javascript"],
        "/#/colors", colors),
    // projectConstructor("Organic Farm Name Generator", ["all", "javascript"],
    //     "/generator", farm),
    projectConstructor("PNM Image Manipulation", ["all", "c"],
        "https://github.com/Marshall-Wilson/pnm-manipulation", cat),
    projectConstructor("Musical Collaboration Explorer", ["all", "c++"],
        "https://github.com/Marshall-Wilson/collaboration-explorer", network),
    // projectConstructor("RPN Calculator", ["all", "c"],
    //     "/rpn", rpn)
]



export default PROJECTS