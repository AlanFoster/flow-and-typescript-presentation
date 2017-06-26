// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("codemirror/mode/jsx/jsx");
require("spectacle/lib/themes/default/dark.codemirror.css");

import WithSlidesLink from './with-slides-link';

const images = {
  automated: require('../assets/automated.png'),
  invalidName: require('../assets/invalid-name.png'),
  flowLogo: require('../assets/flow-logo.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default WithSlidesLink(class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Flow
          </Heading>
          <Heading size={4} caps lineHeight={1} textColor="quartenary">
            &
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            TypeScript
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="secondary">
          <Heading size={4} textColor='tertiary'>What are they?</Heading>
          <List>
            <Appear><ListItem textColor='primary'>Command line tools</ListItem></Appear>
            <Appear><ListItem textColor='primary'>Verify JavaScript before its run, i.e. at compile time</ListItem></Appear>
            <Appear><ListItem textColor='primary'>Rely on explicit or inferred 'type' information</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="secondary">
          <List>
            <Appear><ListItem textColor='primary'>Facebook = Flow</ListItem></Appear>
            <Appear><ListItem textColor='primary'>Microsoft = TypeScript</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            Example
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/bugs.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor='tertiary'>Oops...</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/output.example")}
            margin="20px auto"
          />

          <Appear>
            <Heading size={6} textColor='quartenary'>Runtime issues</Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Spot the bugs?</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/bugs.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Image width="75%" src={images.automated}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='secondary'>let's introduce...</Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Image width="50%" src={images.flowLogo}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Compile time error</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/cli-errors.example")}
            margin="20px auto"
          />
          <Appear>
            <Heading size={6} textColor='quartenary'>Spotted before running</Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="secondary">
          <Heading size={4} textColor='tertiary'>... How?</Heading>
          <Appear>
            <Heading size={6} textColor='primary'>Type information!</Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Primitive Types: Inferred</Heading>
          <CodePane
            lang="jsx"
            source={`
const firstName = 'Alan';
const age = 1337;
const isHotdog = true;


age.toUpperCase()
// - ^ TypeError: age.toUpperCase is not a function
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['appear']} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Being more explicit</Heading>
        </Slide>

        <Slide transition={['appear']} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Extending the language</Heading>
          <Heading size={4} textColor='quartenary'>Adding additional type hints</Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Functions</Heading>
          <CodePane
            lang="jsx"
            source={`
function add(x: number, y: number): number {
  return x + y;
}

add(2, 3); // Valid

add('2', '3'); // Invalid
// - ^ string. This type is incompatible with the expected param type of number
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Array Types</Heading>
          <CodePane
            lang="jsx"
            source={`
function log(numbers: Array<number>) {
    // ...
}

function log(strings: Array<string>) {
    // ...
};

function log(people: Array<Person>) {
    // ...
};

function map<T, U>(elements: Array<T>, mappingFunction: (T) => U): Array<U> {
  //
};
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Object Types</Heading>
          <CodePane
            lang="jsx"
            source={`
type Person = {
  firstName: string,
  lastName: string,
  age: number
}

const getName = function (person: Person) {
  return \`\${person.firstName} \$\{person.firstName}\`;
};

getName({ firstName: 'a', lastName: 'b', age: 23 }); // valid

getName({ firstName: 'a', lastName: 'b' }); // invalid
//    - ^ property \`age\`. Property not found in object literal
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Literal Types</Heading>
          <CodePane
            lang="jsx"
            source={`
type Planet = "mercury" | "venus" | "earth" | "etc"

function getMass(planet: Planet): number {
  switch (planet) {
    case "mercury" : return 1337;
    case "venus" : return 1337;
    case "earth"  : return 1337;
    // ... etc ...
  }
}

getMass("mercury"); // valid
getMass("pluto"); // invalid
//    - ^ string. This type is incompatible with the expected param type of Planet string enum
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Anything else?</Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={4} textColor='tertiary'>Editor support</Heading>
          <Image width="75%" src={images.invalidName}/>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">
              REPL
            </Text>
          </Link>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="secondary">
          <Heading size={4} textColor='tertiary'>Want to catch bugs before production?</Heading>
        </Slide>

         <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Flow
          </Heading>
          <Heading size={4} caps lineHeight={1} textColor="quartenary">
            or
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            TypeScript
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            le fin
          </Heading>
        </Slide>
      </Deck>
    );
  }
});
