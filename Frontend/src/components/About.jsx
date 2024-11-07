const About = () => {
  return (
    <div className="mt-24 mx-auto max-w-screen-xl font-serif">
      <div className="flex flex-col gap-6">
        <h3 className="font-serif font-semibold text-pretty text-2xl ">Why HealthMap ?</h3>
        <div className="flex gap-10">
          <div className="bg-green-300 rounded-md p-6 flex flex-col justify-center items-center text-center gap-8 min-h-84">
            <img src="https://kynohealth.com/images/excellence.svg" alt="" />
            <div className="space-y-4">
              <h4>Excellence Assured</h4>
              <p className="max-w-md">
                Expert doctors with proven experience, best quality medical
                supplies
              </p>
            </div>
          </div>
          <div className="bg-green-300 rounded-md p-6 flex flex-col justify-center items-center text-center gap-8">
            <img src="https://kynohealth.com/images/Equipped.svg" alt="" />
            <div className="space-y-4">
              <h4 >Equipped & Ready</h4>
              <p className="max-w-md">We come prepared with emergency medical kits Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="bg-green-300 rounded-md p-6 flex flex-col justify-center items-center text-center gap-8">
            <img src="https://kynohealth.com/images/consultation.svg" alt="" />
            <div className="space-y-4">
              <h4>Detailed Consultation</h4>
              <p className="space-y-4">
                Our doctors take time to answer your questions to your
                satisfaction
              </p>
            </div>
          </div>
          <div className="bg-green-300 rounded-md p-6 flex flex-col justify-center items-center text-center gap-8">
            <img src="https://kynohealth.com/images/follow.svg" alt="" />
            <div className="space-y-4">
              <h4>Follow-up Assistance</h4>
              <p className="space-y-4">
                Get free of cost post-consultation support till your full
                recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
