import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminDashBoard = () => {
    const axiosPublic = useAxiosPublic();

  // Fetching total biodata
  const { isLoading: isLoadingBiodata, data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata", { withCredentials: true });
      return res.data;
    },
  });

  // Fetching male biodata
  const { isLoading: isLoadingMaleBio, data: maleBiodatas = [] } = useQuery({
    queryKey: ["maleBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata/male", { withCredentials: true });
      return res.data;
    },
  });

  // Fetching female biodata
  const { isLoading: isLoadingFemaleBio, data: femaleBiodatas = [] } = useQuery({
    queryKey: ["femaleBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata/female", { withCredentials: true });
      return res.data;
    },
  });

  // Fetching married biodata
  const { isLoading: isLoadingMarriedBio, data: marriedBiodatas = [] } = useQuery({
    queryKey: ["marriedBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/successStory");
      return res.data;
    },
  });

  if (isLoadingBiodata || isLoadingMaleBio || isLoadingFemaleBio || isLoadingMarriedBio) {
    return <span>Loading...</span>;
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Aggregate the data for the PieChart
  const piechartData = [
    { name: 'Male', value: maleBiodatas.length },
    { name: 'Female', value: femaleBiodatas.length },
    { name: 'Married', value: marriedBiodatas.length },
    { name: 'Total', value: biodatas.length }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={piechartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {piechartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AdminDashBoard;