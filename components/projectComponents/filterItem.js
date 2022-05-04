export const FilterItem = ({
  name,
  id,
  value,
  checked,
  title,
  changeCategory,
}) => {
  return (
    <div className="w-full">
      <input
        name={name}
        type="radio"
        id={id}
        value={value}
        className="appearance-none peer hidden w-full"
        onClick={() => changeCategory({ title })}
      />
      <label
        htmlFor={id}
        className="block bg-gray-200 peer-checked:bg-turquoise min-w-10 rounded-lg px-2 py-3 font-roboto text-turquoise peer-checked:text-white font-bold text-center text-xs uppercase"
      >
        {title}
      </label>
    </div>
  );
};
