import ButtonComponent from "./button";

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <ButtonComponent />
    </div>
  );
};

export default Contact;
