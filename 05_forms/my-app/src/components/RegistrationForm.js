import {useState} from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [userData, setUserData] = useState(null);
  
    const onSubmit = (data) => {
      setUserData(data);
      reset(); 
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Нікнейм:</label>
            <input {...register("nickname", { required: true })} />
            {errors.nickname && <span className="error">Це поле є обов'язковим</span>}
          </div>
  
          <div>
            <label>Електронна адреса:</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && errors.email.type === "required" && <span className="error">Це поле є обов'язковим</span>}
            {errors.email && errors.email.type === "pattern" && <span className="error">Введіть коректну електронну адресу</span>}
          </div>
  
          <div>
            <label>Стать:</label>
            <select {...register("gender", { required: true })}>
              <option value="">Оберіть стать</option>
              <option value="male">Чоловіча</option>
              <option value="female">Жіноча</option>
              <option value="other">Інше</option>
            </select>
            {errors.gender && <span className="error">Це поле є обов'язковим</span>}
          </div>
  
          <div>
            <label>Вік:</label>
            <input type="number" {...register("age", { required: true, min: 1, max: 150 })} />
            {errors.age && errors.age.type === "required" && <span className="error">Це поле є обов'язковим</span>}
            {errors.age && (errors.age.type === "min" || errors.age.type === "max") && <span className="error">Введіть коректний вік</span>}
          </div>
  
          <button type="submit">Зареєструватися</button>
        </form>
  
        {userData && (
          <div>
            <h2>Дані користувача:</h2>
            <p>Нікнейм: {userData.nickname}</p>
            <p>Електронна адреса: {userData.email}</p>
            <p>Стать: {userData.gender}</p>
            <p>Вік: {userData.age}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default RegistrationForm;