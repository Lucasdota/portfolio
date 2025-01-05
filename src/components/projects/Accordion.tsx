import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DetailsAccordion from "./DetailsAccordion";

const skillsAppliedDescription = [
  {
    topic: "Local storage & global state:",
    description:
      "I store the cart items and favorite items information of the currently logged-in user on local storage. Upon initial render, if the user is logged in, I retrieve their email to get all data associated with it from the local storage. Then, I share this data across the entire app through a global state declared in the AppContext API to generate and manipulate elements by comparing data stored in these states and the Catalog.js file.",
    details: [
      "On first load, it checks if there's a cart in the local storage (mimicking a server). If yes, it checks if it has a cart assigned to the current user's email. If yes, it assigns a state to it. If not, it creates a new cart with their email and assigns it to the cart state and local storage. If there's no cart in the local storage, it creates a new array with the correct format and assigns both a new state and local storage to it. The same logic is applied to set the current user's favorite items.",
      "The 'Add to Cart' and 'Add to Favorites' buttons also have their functionality linked to these global states and local storage. When the user clicks one of these buttons, they check if the target is already in the cart/favorite list. If yes, they increase its quantity or remove it (in the case of the favorite list). If not, they add the target, which is the product, to the respective list.",
      "On the recipes page, I check if there's already a trending item in the localStorage. If yes, I grab it and display them; otherwise, I fetch three random recipes, set the local storage and display them. I implemented this to reduce calls to the Spoonacular API and mimic how a server would have a fixed 'trending' section, displaying the same recipes for that week or month, depending on the team's decision.",
      "I also stored the total number of items in the cart in a global state so that I can access it in the cart drawer component and display it.",
    ],
  },
  {
    topic: "Fetch API:",
    description:
      "I perform fetch requests to the Spoonacular API to search for and display recipes based on user input. I also use the ApiLoader from the Google Maps API, which fetches data from its endpoint. With the retrieved data, I generate and manipulate the integrated map based on states.",
    details: [
      "On the recipes page, during the initial load, the app retrieves either trending recipes from local storage or makes a fetch request to the Spoonacular API for three random recipes if no local data is available. Clicking on any of the cards generated from these results redirects the user to a new page with relevant information about the respective recipe. I've also incorporated a search bar that makes fetch requests to search for recipes based on ingredients. It displays all matching results, and similar to the trending section, clicking on the generated cards takes the user to the appropriate recipe page.",
      "On the our stores page, an integrated Google Maps is generated by performing a fetch request to the Google Maps endpoint. I have included 14 fictional stores in it, allowing users to interact and access information such as name, address, working hours, and more.",
    ],
  },
  {
    topic: "Custom form validation:",
    description:
      "Applied a combination of client-side validation techniques to validate form input fields in real-time, ensuring data submitted matches the requirements set forth in the various form controls.",
    details: [
      "Upon first submission, the app verifies whether the input data passes the tests set for each field, including name, email, PDF uploader, and more. If any field does not meet the criteria, error messages are displayed below the respective field, providing hints on what needs correction. Subsequently, the app initiates real-time checking as the user types in each field, enhancing the overall user experience.",
    ],
  },
  {
    topic: "Accessibility:",
    description:
      "Associated labels with every form control; provide clear instructions, error messages, and notifications to help users complete forms; used WAI-ARIA to provide information on function and state for custom widgets, such as accordions and custom-made buttons; ensured that all interactive elements are keyboard accessible, making it easier to navigate even between accordions, drawer and pop-ups; added descriptive texts for meaningful images; and more.",
    details: [
      "Added a skip button on the beginning of each homepage carousel that jumps to the next one.",
      "Improved user experience by blocking tab iteration outside the navbar menu, cart and login pop-up. I also added an event listener that closes those when the key ESC is pressed.",
      "Provided meaningful alt text for each image in the homepage hero slider.",
      "Enhanced accessibility with appropriate ARIA functions, including state teller for accordions, roles for divs, and aria-label for relevant elements, and more",
      "Included a 'Jump to Top' button on desktops, visible only when a page exceeds a specified length and the scroll position is above half of its total height.",
    ],
  },
  {
    topic: "Responsive design:",
    description:
      "Adapted the display to different zoom states and viewport sizes, such as those on desktops, mobile devices and tablets.",
    details: [
      "Used Tailwind media queries to apply different styles based on the screen width.",
      "Next.js provides automatic image optimization, which means it optimizes images for performance by default. It generates multiple sizes of each image and chooses the appropriate size based on the user's device, screen size, and resolution. This can significantly improve page loading times.",
      "Utilized Flexbox or Grid Layout for creating flexible and responsive layouts.",
      "Used React's state and lifecycle methods to conditionally render components or elements based on screen size, providing flexibility to style and optimize the user interface for different devices.",
    ],
  },
  {
    topic: "Animations:",
    description:
      "I designed smooth animations using the framer-motion library, including opacity fade in and out, sliding carousel images, moving elements in the x and y axis, and animations for growing and shrinking elements.",
    details: [
      "The mini-navbar above the main one features a smooth appearance with a staggered fade-in animation for each navigation item.",
      "The main search bar suggestions use a similar staggered animation for a cool sequential entrance.",
      "Each navbar link has a custom hover background animation.",
      "The cart drawer has a slide-in animation synchronized with the gray overlay fade-in animation.",
      "The navbar menu uses translate animations along the x-axis for smooth navigation interactions.",
      "Applied the x-axis animation for slide-in and out animations in the hero slider component.",
      "Carousels in the homepage activate animations only when entering the viewport.",
      "In the 'Chefs' and 'Delivery Rotisserie' pages, a combination of clip path, translate, and scale animations creates a visually appealing effect.",
    ],
  },
  {
    topic: "Custom carousel:",
    description:
      "I developed a custom responsive carousel for the homepage from scratch.",
    details: [
      "I filter the catalog to create a carousel with products belonging to the specific section. Using useEffect, I dynamically set the card width based on media queries, incorporating the logic into a resize event listener for improved responsiveness.",
      "If the user is on the first or last card of the carousel and clicks the left or right chevron to move, a copy of the carousel is rendered at the beginning or end, respectively. The scrollbar is then moved behind the scenes to the same card that was displayed, but not from the copy, creating the illusion of an infinite slider/carousel.",
    ],
  },
];

const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [detailsExpandedItems, setDetailsExpandedItems] = useState<number[]>([]);
	  
	//The id represents the unique identifier of the accordion item you want to toggle
	const toggleAccordion = (id: number) => {
		//This is an if statement that checks whether the id is already present in the expandedItems array
		if (expandedItems.includes(id)) {
			//If the id is already in the expandedItems array (indicating that the accordion item is expanded), this line of code removes the id from the expandedItems array by using the filter method. It creates a new array with all IDs except the one that matches the id passed as an argument. This effectively collapses the accordion item.
			setExpandedItems(expandedItems.filter((item) => item !== id));
			
			//closes any more details... that is open of the respective accordion
			if (id === 0) {
				setDetailsExpandedItems(
					detailsExpandedItems.filter((item) => item !== -1)
				);
			}
			if (id === 1) {
				if (detailsExpandedItems.includes(-1)) {
					setDetailsExpandedItems([-1])
				} else {
					setDetailsExpandedItems([])
				}
			}

		} else {
			setExpandedItems([...expandedItems, id]);
		}
	};

	const toggleDetails = (id: number) => {
    if (detailsExpandedItems.includes(id)) {
      setDetailsExpandedItems(detailsExpandedItems.filter((item) => item !== id));
    } else {
      setDetailsExpandedItems([...detailsExpandedItems, id]);
    }
  };

  return (
    <div className="w-full flex flex-col tracking-wide">
      {/* how it works accordion */}
      <button
        role="accordion"
        aria-expanded={expandedItems.includes(0)}
        onClick={() => toggleAccordion(0)}
        className="py-4 mx-4 grow outline-none border-b dark:border-neutral-700 border-neutral-300 transition duration-400 ease-in flex justify-start items-center leading-6 text-base sm:whitespace-normal tracking-wide"
      >
        How it works
        <p className="ml-1.5">{expandedItems.includes(0) ? "-" : "+"}</p>
      </button>
      <AnimatePresence>
        {expandedItems.includes(0) && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul
              className={`px-8 py-4 font-[350] whitespace-normal text-base text-neutral-600 dark:text-green-400 mx-4`}
            >
              <li className={`space-y-2`}>
                <p className="text-thin leading-5 text-neutral-700 dark:text-neutral-100">
                  I utilized the Catalog.js file-an array of objects containing
                  all sections, each section housing information about the
                  respective products such as name, price, image, and category;
                  to propagate data throughout the entire application,
                  dynamically generating various components, including a search
                  bar, carousels, products pages, and other essential elements.
                </p>

                <button
                  aria-label="expand details"
                  role="accordion"
                  aria-expanded={detailsExpandedItems.includes(-1)}
                  onClick={() => toggleDetails(-1)}
                  className={`grow outline-none transition duration-400 ease-in flex justify-start items-center leading-6 sm:whitespace-normal
				 dark:text-stone-400 text-stone-600 text-[0.93rem]`}
                >
                  more details
                  <p
                    className={`ml-1 ${
                      detailsExpandedItems.includes(-1) ? "" : null
                    }`}
                  >
                    {detailsExpandedItems.includes(-1) ? "-" : "+"}
                  </p>
                </button>
                {detailsExpandedItems.includes(-1) && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`font-[350] whitespace-normal flex flex-col gap-1.5 text-thin leading-5 text-[0.93rem] text-neutral-700 dark:text-neutral-100 mx-4`}
                    >
                      <span>
                        .As the user types in the search bar, the app iterates
                        over the catalog to find all products that match the
                        user&apos;s input in their name. These matches are then
                        displayed below as link suggestions that redirect the
                        user to the respective product page upon clicking.
                        Alternatively, if the user chooses to click the search
                        button, the app navigates to a new page displaying all
                        matching products, checking the typed words against the
                        search words array attached to each product in the
                        catalog. This page includes options to filter the
                        results by price and category, with filters dynamically
                        generated from the search results to capture the lower
                        and higher prices and extract their respective
                        categories.
                      </span>
                      <span>
                        .Iterating over the catalog, I generate a list of
                        sections in the navbar menu, each containing links to
                        every product page within that section.
                      </span>
                      <span>
                        .Similarly, I generate carousels on the homepage by
                        iterating over the catalog and retrieving information
                        for each product.
                      </span>
                    </p>
                  </motion.div>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* skills applied accordion */}
      <button
        role="accordion"
        aria-expanded={expandedItems.includes(1)}
        onClick={() => toggleAccordion(1)}
        className="py-4 mx-4 grow outline-none border-b dark:border-neutral-700 border-neutral-300 transition duration-400 ease-in flex justify-start items-center leading-6 text-base sm:whitespace-normal tracking-wide"
      >
        Skills applied
        <p className="ml-1.5">{expandedItems.includes(1) ? "-" : "+"}</p>
      </button>
      <AnimatePresence>
        {expandedItems.includes(1) && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul
              className={`px-8 pt-4 font-[350] whitespace-normal text-base text-neutral-600 dark:text-green-400 mx-4 list-disc`}
            >
              {skillsAppliedDescription.map((text, index) => {
                return (
                  <li key={`description+${index}`} className={`space-y-2 mb-4`}>
                    <h4>{text.topic}</h4>
                    <p className="text-thin leading-5 text-neutral-700 dark:text-neutral-100">
                      {text.description}
                    </p>
                    <DetailsAccordion
                      id={index}
                      isExpanded={detailsExpandedItems.includes(index)}
                      toggleAccordion={toggleDetails}
                      details={text.details}
                    />
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;