import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Form = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const handleSuccessToast = (message:string) => {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 3500,
        isClosable: true,
      });
    };
  
    const handleErrorToast = (errorMessage:string) => {
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    }; 

    const validateEmail = (email:string) => {
        // Basic email validation using regular expression
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
      };
    
    const handleFormSubmit = (e:any) => {
        setIsButtonDisabled(true);
        // e.preventDefault();

        if (!email) {
            handleErrorToast('Email is required.');
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 2500);
        } else if (!password) {
            handleErrorToast('Password is required.');
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 2500);
        } else if (!validateEmail(email)) {
            handleErrorToast('Please enter a valid email address.');
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 2500);
        } else if (password.length < 6) {
            handleErrorToast('Password should be at least 6 characters long.');
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 2500);
        } else {
        // Submit the form or perform further actions
            handleSuccessToast('Form submitted successfully!');
            setIsButtonDisabled(false);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 3500);
            router.push({
                pathname: '/home',
                query: { isLoggedIn: true },
              });
        } 
};

    return (
        <Stack spacing={5} align="center">
        <Heading as="h1" size="2xl" color="green.500" fontWeight="bold">
            GreenEfficiency
        </Heading>
        <Heading as="h1" size="md" color="pink.500" fontWeight="bold">
            Save Money , Save Nature
        </Heading>
        <Heading as="h6" size="md" fontWeight="normal">
            Login Form
        </Heading>
        <FormControl
            shadow="lg"
            borderRadius="lg"
            p={8}
            mt={5}
            isRequired
            w="sm"
        >
            <FormLabel>Email</FormLabel>
            <Input
            value={email}
            onChange={handleEmailChange}
            type="text"
            placeholder="Your email..."
            mb={3}
            />
            <FormLabel>Password</FormLabel>
            <Input
            type="password"
            placeholder="Your password..."
            value={password}
            onChange={handlePasswordChange}
            mb={5}
            />
            <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                bg="blue.600"
                color="white"
                p={2}
                rounded="lg"
                mt={2}
                onClick={handleFormSubmit}
                isDisabled={isButtonDisabled}
                isLoading ={isLoading}
                loadingText='Submitting'
            >
                Submit
            </Button>
        </FormControl>
        </Stack>
    );
};

export default Form;
