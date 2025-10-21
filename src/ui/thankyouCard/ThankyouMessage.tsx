function ThankyouMessage() {
  return (
    <div className="flex flex-col gap-200 text-center">
      <h1 className="text-preset-2 leading-preset-2 sm:text-preset-1 sm:leading-preset-1 font-bold">
        Thank you!
      </h1>
      <p className="text-grey-500 text-preset-5 leading-preset-5-regular sm:text-preset-4 sm:leading-preset-4-regular">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
}

export default ThankyouMessage;
