export function meta() {
  return [
    { title: "FastPizza | Home" },
    { name: "description", content: "Welcome to FastPizza!" },
  ];
}
function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
