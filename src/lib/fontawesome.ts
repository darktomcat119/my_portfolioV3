/**
 * @fileoverview FontAwesome configuration for the portfolio
 * Sets up FontAwesome icons for use throughout the application
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faReact, faNodeJs, faVuejs, faJs, faPhp, faPython, faDocker, 
  faAws, faGitAlt, faLaravel, faHtml5, faCss3Alt, faBootstrap
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faReact, faNodeJs, faVuejs, faJs, faPhp, faPython, faDocker, 
  faAws, faGitAlt, faLaravel, faHtml5, faCss3Alt, faBootstrap
)
