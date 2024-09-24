import './testimonials.scss'
import pic1 from '../../assets/pic-1.png'
import pic2 from "../../assets/pic-2.png";
import pic3 from "../../assets/pic-3.png";


const Testimonials = () => {

  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="head">
          <h3 className="text-xl md:text-3xl font-semibold text-center mb-6">
            Testimonials
          </h3>
          <p className="mt-3 mb-20 text-center ">
            Client experiences and feedback on my work.
          </p>
        </div>

      <div className="testimonial-list grid gap-8 md:grid-cols-2 xl:grid-cols-3 px-4 md:px-12">
        {/* Testimonial 1 */}
        <div className="testimonial-card  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img
              src={pic1}
              alt="Client 1"
              className="w-16 h-16 rounded-full mr-4 shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-sm ">CEO at TechCompany</p>
            </div>
          </div>
          <p className="">
            "Mohamed is a talented developer who delivered our project on time and exceeded expectations. I highly recommend him!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img
              src={pic2}
              alt="Client 2"
              className="w-16 h-16 rounded-full mr-4 shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold">Jane Smith</h4>
              <p className="text-sm ">Project Manager at WebCorp</p>
            </div>
          </div>
          <p className="">
            "Working with Mohamed has been an absolute pleasure. His attention to detail and commitment to quality are outstanding."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <img
              src={pic3}
              alt="Client 3"
              className="w-16 h-16 rounded-full mr-4 shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold">Michael Lee</h4>
              <p className="text-sm ">Lead Developer at SoftDev</p>
            </div>
          </div>
          <p className="">
            "Highly skilled and professional, Mohamed delivered a solution that improved our product efficiency by 30%."
          </p>
          </div>  
        </div>  
        
      </section>
    </>
  );
}

export default Testimonials