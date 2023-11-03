// import Navbar from "./Navbar";
// // import TextForm from "./components/TextForm";
// import About from "./components/about";


// function App() {
//   return (
//    <>
// <Navbar title = "TextUtils"/>
// <div className="container my-3">
//   {/* <TextForm heading = "Enter the text to analysis"/> */}
//  <About/>
// </div>
// </>
//   );
// };

// export default App;

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}>
//       {product.title}
//     </li>
//   );

//   return (
//     <ol>{listItems}</ol>
//   );
// }

// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


// function Anyphoto(){
//   return (
//     <>
//     <img src="https://www.canon.co.nz/-/media/images/my-image-garden/my-image-garden-700x480.ashx" alt="My gallary" />
//     </>
//   );
// }

// export default function Gallary(){
//   return(
//     <>
//     <section>
//       <h1>Helllo This is my gallary I can use many times a single photo by using my function name</h1>
//       <Anyphoto/>
//       <Anyphoto/>
//       <Anyphoto/>
//       <Anyphoto/>
//       <Anyphoto/>
//     </section>
//     </>
//   );
// }

// export default function Avtar(){
//   const avtar="https://i.imgur.com/7vQD0fPs.jpg";
//   const description ="Big scientist";
//   return(
//     <>
//     <img 
//     className="avtar"
//     src={avtar}
//     alt={description}
//     />
//     </>
//   );
// }

// export default function Todolist(){
//   const name= "Arjun Gehlot";
//   return (
//     <>
//   <h1>This name of Successful Person is {name} </h1>
//     </>
//   );
// }

// import { getImageUrl } from './utils.js';

// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 70
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li><b>Profession:</b> {profession}</li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(',')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal'
//         ]}
//       />
//       <Profile
//         imageId='YfeOqp2'
//         name='Katsuko Saruhashi'
//         profession='geochemist'
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]}
//       />
//       <Profile
//         imageId='YfeOqp2'
//         name='Arjun Gehlot'
//         profession='JO tu nhi Janta'
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]}
//       />
//     </div>
//   );
// }