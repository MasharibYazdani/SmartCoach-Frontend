import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        BASE_URL + "/admin/register",
        {
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        },
        { withCredentials: true }
      );
      toast.success("User Registered Successfully. Please Login !");
      navigate("/login");
    } catch (error) {
      toast.error("User Can't Register !");
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="my-2" htmlFor="name">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label className="my-2" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label className="my-2" htmlFor="phone">
                Phone No.
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label className="my-2" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              Signup
            </Button>

            <div className="text-center">
              <span>Existing User ? </span>
              <Link className="text-blue-500" to={"/login"}>
                Log In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
