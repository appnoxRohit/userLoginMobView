import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/messageInvitation");
  };

  return (
    <div className="">
      <div className="w-full mt-12 md:mt-[80px]">
        <h1 className="text-[56px] md:text-14 font-bold text-center font-dm-serif">
          Contattaci
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)} // Form will only submit if validation passes
        className="mt-10 flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col w-full">
            <input
              id="nome"
              type="text"
              placeholder="Nome"
              className="px-4 py-3 w-full text-sm rounded-lg bg-zinc-100 md:w-full"
              {...register("nome", { required: "Nome is required" })}
            />
            {errors.nome && (
              <span className="text-red-500 text-sm">
                {errors.nome.message}
              </span>
            )}
          </div>

       <div className="flex flex-col w-full">
       <input
            id="cognome"
            type="text"
            placeholder="Cognome"
            className="px-4 py-3 w-full text-sm rounded-lg bg-zinc-100 md:w-full"
            {...register("cognome", { required: "Cognome is required" })}
          />
          {errors.cognome && (
            <span className="text-red-500 text-sm">
              {errors.cognome.message}
            </span>
          )}
       </div>
        </div>

        <div className="flex flex-col w-full gap-4 md:flex-row">
         <div className="flex flex-col w-full">
         <input
            id="email"
            type="email"
            placeholder="Email"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
         </div>

        <div className="flex flex-col w-full">
        <input
            id="tel"
            type="tel"
            placeholder="Telefono"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            {...register("tel", {
              required: "Telefono is required",
              minLength: {
                value: 10,
                message: "Telefono must be at least 10 digits",
              },
            })}
          />
          {errors.tel && (
            <span className="text-red-500 text-sm">{errors.tel.message}</span>
          )}
        </div>
        </div>

        <div className="relative">
          <select
            name="request"
            id="request"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 appearance-none w-full pr-10"
            {...register("request")}
          >
            <option value="">Richiesta Valutazione</option>
          </select>
          {errors.request && (
            <span className="text-red-500 text-sm">
              {errors.request.message}
            </span>
          )}
          <FaChevronDown className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <textarea
          name="message"
          rows={6}
          id="message"
          className="px-4 py-3 text-sm rounded-lg bg-zinc-100 resize-none"
          placeholder="Come possiamo aiutarla?"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}

        <div className="flex items-center justify-center px-4 py-3 text-sm text-gray-500 rounded-lg bg-zinc-100 border-2 border-dashed border-gray-300 min-h-[100px] cursor-pointer">
          Carica Immagini
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
            {...register("image")}
          />
        </div>

        {/* Remove NavLink from around the submit button */}
        <button
          type="submit"
          className="px-4 flex justify-center py-3 text-sm rounded-full bg-black text-white"
        >
          Invia Messaggio
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
