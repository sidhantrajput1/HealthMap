const Features = () => {
  return (
    <div className="mt-16">
      <div className="mx-auto max-w-screen-xl flex flex-col gap-7 font-serif">
        <div>
          <h3 className="text-2xl">What Would You Like To Do Today?</h3>
        </div>
        <div className="flex gap-9 p-1">
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-auto">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/bookappt_icon.svg"
              alt="Book Appointment"
            />
            <h3>Book Appointment</h3>
          </div>
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-44">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/buymedicines_icon.svg"
              alt="Consult Online"
            />
            <h3>Consult Online</h3>
          </div>
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-auto">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/consultonline_icon.svg"
              alt="Book Appointment"
            />
            <h3>Book Appointment</h3>
          </div>
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-auto">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/bookhelathcheck_icon.svg"
              alt="Book Health Checkup"
            />
            <h3>Book Health Checkup</h3>
          </div>
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-40">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/findhsptl_icon.svg"
              alt="Find Hospital"
            />
            <h3>Find Hospital</h3>
          </div>
          <div className="bg-white flex flex-col  justify-center items-center p-6 gap-4 rounded-lg h-44 w-auto">
            <img
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/finddoctor_icon.svg"
              alt="Book Appointment"
            />
            <h3>View Health Record</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
