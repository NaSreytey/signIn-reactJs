import React, { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const InputForm: React.FC = () => {
  const [form, setForm] = useState<FormValues>({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    let isValid = true;

    if (!form.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
      // Clear form and errors after submission
      setForm({ email: '', password: '', confirmPassword: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[300px] flex flex-wrap gap-1 p-3 bg-gray-500'>
      <div>
        <input
          className='border border-gray-400 p-1'
          type="email"
          name='email'
          placeholder='username@email.com'
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className='text-red-600'>{errors.email}</p>}
      </div>
      <div>
        <input
          className='border border-gray-400 p-1'
          type="password"
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className='text-red-600'>{errors.password}</p>}
      </div>
      <div>
        <input
          className='border border-gray-400 p-1'
          type="password"
          name='confirmPassword'
          placeholder='Confirm Password'
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword}</p>}
      </div>
      <button type='submit' className='w-[80px] bg-green-600 text-white'>Submit</button>
    </form>
  );
};

export default InputForm;
