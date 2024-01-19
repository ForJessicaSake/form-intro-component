import { useFormik } from "formik";

function Home() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Password is required";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <main className="md:bg-[url('/images/bg-intro-desktop.png')] bg-[url('/images/bg-intro-mobile.png')] bg-[#ff7879] bg-cover min-h-[100vh] lg:py-10 py-14 px-10 lg:px-20">
      <div className="mx-auto container flex lg:flex-row flex-col justify-between items-center gap-5">
        <div className="lg:w-6/12 lg:text-left text-center">
          <h1 className="lg:text-5xl text-3xl sm:text-4xl lg:max-w-lg font-bold text-[#fffffe]">
            Learn to code by watching others
          </h1>
          <p className="text-[#fff0e3] lg:max-w-md w-full pt-5">
            See how experienced developers solve problem in real-time, Watching
            scripted tuturials are great but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        <div className="lg:w-6/12">
          <div
            className="bg-[#5c55a3] text-[#f7f7fa]  max-w-4xl text-center p-4 rounded-lg"
            style={{ boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.55)" }}
          >
            <p>
              <span className="font-bold">Try it free 7days</span> then
              $20/mo. thereafter
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col space-y-3 p-6 bg-[#fffefe] rounded-lg max-w-4xl mt-5"
          >
            <label htmlFor="first-name">
              <input
                placeholder="First Name"
                type="text"
                id="first-name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-[#f3f2f2]  text-black rounded-lg p-3 w-full placeholder:font-medium placeholder:text-[#858484]"
              />
            </label>
            <p className="text-sm text-[#ff7879]">
              {formik.errors.firstName &&
                formik.touched &&
                formik.errors.firstName}
            </p>
            <label htmlFor="last-name">
              <input
                placeholder="Last Name"
                type="text"
                id="last-name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="border border-[#f3f2f2]  text-black rounded-lg p-3 w-full placeholder:font-medium placeholder:text-[#858484]"
              />
            </label>
            <p className="text-sm text-[#ff7879]">
              {formik.errors.lastName &&
                formik.touched &&
                formik.errors.lastName}
            </p>
            <label htmlFor="email">
              <input
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-[#f3f2f2]  text-black rounded-lg p-3 w-full placeholder:font-medium placeholder:text-[#858484]"
              />
            </label>
            <p className="text-sm text-[#ff7879]">
              {formik.errors.email && formik.touched && formik.errors.email}
            </p>
            <label htmlFor="password">
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-[#f3f2f2]  text-black rounded-lg p-3 w-full placeholder:font-medium placeholder:text-[#858484]"
              />
            </label>
            <p className="text-sm text-[#ff7879]">
              {formik.errors.password &&
                formik.touched &&
                formik.errors.password}
            </p>
            <label htmlFor="confirm-password">
              <input
                placeholder="Confirm Password"
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-[#f3f2f2]  text-black rounded-lg p-3 w-full placeholder:font-medium placeholder:text-[#858484]"
              />
            </label>

            <p className="text-sm text-[#ff7879]">
              {formik.errors.confirmPassword &&
                formik.touched &&
                formik.errors.confirmPassword}
            </p>
            <button className="bg-[#36cd8a] text-white rounded-lg p-4 font-semibold">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-[#d8d7e5] text-sm text-center">
              By clicking this button, you are agreeing to our{" "}
              <span className="text-[#ff7879] font-bold">
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Home;
