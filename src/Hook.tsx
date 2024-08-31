import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  cpassword: string;
};

const Hook = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const password = watch("password");
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-wrap w-[200px] p-2 gap-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <input className="border" 
      placeholder="email"
      {...register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email address',
        },
      })}
       />
      {errors.email && (
        <span className="text-red-500">{errors.email.message} </span>
      )}
      <input
        className="border"
        placeholder="password"
        {...register("password", {
            required: "password is required",
            minLength: { value: 6, message: "password must be 5 chars minimum",
            }})}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <input
        className="border"
        placeholder="comfirm password"
        {...register("cpassword", { 
            required: "Comfirm password is required",
            validate:(value)=>value===password || 'password not match'
         })}
      />
      {errors.cpassword && (
        <span className="text-red-500">{errors.cpassword.message}</span>
      )}

      <input className="border" type="submit" />
    </form>
  );
};
export default Hook;
