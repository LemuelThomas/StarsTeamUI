function Display_FAQs() {
  fetch("http://localhost:8080/Cartoon-Data-App/cartoons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <>
      <div>Here are some fequintly asked questions: </div>
    </>
  );
}
export default Display_FAQs;
