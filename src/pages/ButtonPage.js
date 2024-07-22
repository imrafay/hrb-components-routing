import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="inline-grid">
      <Button primary rounded>Click Primary</Button>
      <Button secondary>Click Secondary</Button>
      <Button success>Click Success</Button>
      <Button warning rounded>Click Warning</Button>
      <Button danger rounded>Click Danger</Button>
    </div>
  );
}

export default ButtonPage;
