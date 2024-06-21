import { Button, Form, Input } from "antd";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import TextArea from "antd/es/input/TextArea";
import useAuth from "../../../Hooks/useAuth";

const GotMarried = () => {
    const {user} = useAuth();
  const axiosPublic = useAxiosPublic();
  const onFinish = async (values) => {
    console.log("Received values:", values);
    await axiosPublic.put("/successStory", values).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data modified successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="">
      <Form
        className="w-full"
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
            email: user?.email,
          }}
      >
        <Form.Item name="selfBiodataId" label="Self BiodataId">
          <Input />
        </Form.Item>
        <Form.Item name="partnerBiodataId" label="Partner BiodataId">
          <Input />
        </Form.Item>
        <Form.Item name="coupleImage" label="Couple Image">
          <Input />
        </Form.Item>
        <Form.Item name="successStory" label="Success Story Review">
        <TextArea rows={8} placeholder="" maxLength={200} />
        </Form.Item>
        <Form.Item hidden name="email" label="Contact Email">
          <Input readOnly />
        </Form.Item>
        

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button
            type="primary"
            className="bg-[#66451c] font-poppins font-semibold w-[70%]"
            htmlType="submit"
          >
            Save & Publish Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GotMarried;
