import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="inline-grid">
      <Button primary rounded outline>Click Primary</Button>
      <Button secondary outline>Click Secondary</Button>
      <Button success outline>Click Success</Button>
      <Button warning rounded>Click Warning</Button>
      <Button danger outline rounded>Click Danger</Button>
    </div>
  );
}

export default ButtonPage;
