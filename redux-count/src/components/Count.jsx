import { useSelector } from "react-redux";

const Count = () => {
  const counter = useSelector((state) => state.counter.count);
  return (
  <div>

    {counter}
    
    </div>
)};
export default Count;
