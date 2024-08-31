import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface YupProps{
  email:string,
  password:string,
  cpassword:string
}

const schema = yup
  .object({
    email: yup.string().email('Invalid email address').required("email is required"),
    password: yup.string().required('password is required').min(6,'password must be at least 6 charaters ').max(12,'password must be less 12'),
    cpassword: yup.string()
    .oneOf([yup.ref('password')],"password not match")
    .required('confirm password is required'),
  })
  .required();

const Yup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data:any) => console.log(data);

  return (
  
      <form className="p-5 flex flex-wrap w-[250px] gap-2 bg-gray-200 " onSubmit={handleSubmit(onSubmit)}>
        <input className="border" {...register("email")} placeholder="email" />
        <p className="text-red-500 text-sm" >{errors.email?.message}</p>

        <input type="password" className="border" {...register("password")} placeholder="password" />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <input type="password" className="border" {...register("cpassword")} placeholder="comfirm password" />
        <p className="text-red-500 text-sm">{errors.cpassword?.message}</p>

        <input className="border p-1 bg-green-500 text-white " type="submit" />
      </form>
  );
};

export default Yup;
