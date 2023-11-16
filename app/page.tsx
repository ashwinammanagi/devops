'use client'

import { Input, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useState, ChangeEvent } from "react";
import { HexColorPicker } from "react-colorful";

export default function Home() {
  const [color, setColor] = useState<string>("#0d1117");
  // Handler function for changing the color
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  // Handler function for changing the color via input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-5 py-10">
      <h1 className='text-3xl'>The DevOps Machine</h1>
      <div>
        <p className='mt-1'>DevOps machine builds your customized website into a docker image and runs it on a container hosted on cloud ☁️.</p>
        <p className='mt-1'>Type your name and pick a color to get the link of your customized website!</p>
        <Card isBlurred className="dark:bg-primary-50/70 sm:max-w-xs mt-10" shadow="sm">
          <CardBody>
            <Input isRequired type="text" label="Enter your name" variant="bordered" />
            <Input isRequired type="text" label="Enter hex color" variant="bordered" className="my-5" value={color} onChange={handleInputChange} />
            <HexColorPicker color={color} onChange={handleColorChange} className="px-1" style={{ width: "100%" }} />
          </CardBody>
          <CardFooter>
            <Button variant="ghost">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
