import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+88</Option>
    </Select>
  </Form.Item>
);

const EditCreateBioData = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <div className="border shadow-2xl w-[100%] lg:w-[80%] mx-auto">
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1000,
        }}
      >
        <Form.Item name="bioDataType" label="BioData Type">
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="fathersName" label="Fathers Name">
          <Input />
        </Form.Item>
        <Form.Item name="mothersName" label="Mothers Name">
          <Input />
        </Form.Item>
        <Form.Item name="profileImage" label="Profile Image">
          <Input />
        </Form.Item>
        <Form.Item name="permanentDivision" label="Permanent Division Name">
          <Select>
            <Select.Option value="Dhaka">Dhaka</Select.Option>
            <Select.Option value="Chattagram">Chattagram</Select.Option>
            <Select.Option value="Rangpur">Rangpur</Select.Option>
            <Select.Option value="Barishal">Barishal</Select.Option>
            <Select.Option value="Khulna">Khulna</Select.Option>
            <Select.Option value="Maymansign">Maymansign</Select.Option>
            <Select.Option value="Sylhet">Sylhet</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="presentDivision" label="Present Division Name">
          <Select>
            <Select.Option value="Dhaka">Dhaka</Select.Option>
            <Select.Option value="Chattagram">Chattagram</Select.Option>
            <Select.Option value="Rangpur">Rangpur</Select.Option>
            <Select.Option value="Barishal">Barishal</Select.Option>
            <Select.Option value="Khulna">Khulna</Select.Option>
            <Select.Option value="Maymansign">Maymansign</Select.Option>
            <Select.Option value="Sylhet">Sylhet</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="dateOfBirth" label="Date of birth">
          <DatePicker />
        </Form.Item>
        <Form.Item name="height" label="Height">
          <Select>
            <Select.Option value="5.3">5.3</Select.Option>
            <Select.Option value="5.4">5.4</Select.Option>
            <Select.Option value="5.5">5.5</Select.Option>
            <Select.Option value="5.6">5.6</Select.Option>
            <Select.Option value="5.7">5.7</Select.Option>
            <Select.Option value="5.8">5.8</Select.Option>
            <Select.Option value="5.9">5.9</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="6.1">6.1</Select.Option>
            <Select.Option value="6.2">6.2</Select.Option>
            <Select.Option value="6.3">6.3</Select.Option>
            <Select.Option value="6.4">6.4</Select.Option>
            <Select.Option value="6.5">6.5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="weight" label="Weight">
          <Select>
            <Select.Option value="50">50</Select.Option>
            <Select.Option value="55">55</Select.Option>
            <Select.Option value="60">60</Select.Option>
            <Select.Option value="65">65</Select.Option>
            <Select.Option value="70">70</Select.Option>
            <Select.Option value="75">75</Select.Option>
            <Select.Option value="80">80</Select.Option>
            <Select.Option value="85">85</Select.Option>
            <Select.Option value="90">90</Select.Option>
            <Select.Option value="95">95</Select.Option>
            <Select.Option value="100">100</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="age" label="Age">
          <InputNumber />
        </Form.Item>
        <Form.Item name="occupation" label="Occupation">
          <Select>
            <Select.Option value="Government Job">Government Job</Select.Option>
            <Select.Option value="Banker">Banker</Select.Option>
            <Select.Option value="Doctor">Doctor</Select.Option>
            <Select.Option value="Engineer">Engineer</Select.Option>
            <Select.Option value="Student">Student</Select.Option>
            <Select.Option value="Not Working">Not Working</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Race" name="race">
          <Select>
            <Select.Option value="asian">Asian</Select.Option>
            <Select.Option value="black_or_african_american">
              Black or African American
            </Select.Option>
            <Select.Option value="hispanic_or_latino">
              Hispanic or Latino
            </Select.Option>
            <Select.Option value="white_or_caucasian">
              White or Caucasian
            </Select.Option>
            <Select.Option value="native_american_or_alaska_native">
              Native American or Alaska Native
            </Select.Option>
            <Select.Option value="native_hawaiian_or_pacific_islander">
              Native Hawaiian or Other Pacific Islander
            </Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="expectedPartnerAge" label="Expected Partner Age">
          <InputNumber />
        </Form.Item>
        <Form.Item name="expectedPartnerHeight" label="Expected Partner Height">
          <Select>
            <Select.Option value="5.3">5.3</Select.Option>
            <Select.Option value="5.4">5.4</Select.Option>
            <Select.Option value="5.5">5.5</Select.Option>
            <Select.Option value="5.6">5.6</Select.Option>
            <Select.Option value="5.7">5.7</Select.Option>
            <Select.Option value="5.8">5.8</Select.Option>
            <Select.Option value="5.9">5.9</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="6.1">6.1</Select.Option>
            <Select.Option value="6.2">6.2</Select.Option>
            <Select.Option value="6.3">6.3</Select.Option>
            <Select.Option value="6.4">6.4</Select.Option>
            <Select.Option value="6.5">6.5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="expectedPartnerWeight" label="Expected Partner Weight">
          <Select>
            <Select.Option value="50">50</Select.Option>
            <Select.Option value="55">55</Select.Option>
            <Select.Option value="60">60</Select.Option>
            <Select.Option value="65">65</Select.Option>
            <Select.Option value="70">70</Select.Option>
            <Select.Option value="75">75</Select.Option>
            <Select.Option value="80">80</Select.Option>
            <Select.Option value="85">85</Select.Option>
            <Select.Option value="90">90</Select.Option>
            <Select.Option value="95">95</Select.Option>
            <Select.Option value="100">100</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="contactEmail" label="Contact Email">
          <Input />
        </Form.Item>
        <Form.Item
          name="mobileNumber"
          label="Mobile Number"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <input type="submit" value="submit" />
      </Form>
    </div>
  );
};

export default EditCreateBioData;
