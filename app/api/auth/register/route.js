import { connect } from "../../../database/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import { registerSchema, loginSchema } from "@/app/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import ErrorReporter from "@/app/validator/ErrorReporter";
import bcrypt from "bcryptjs";
import { User } from "@/app/models/User";


connect();

export async function POST(request) {
  try {
    const body = await request.json();
    const validator = vine.compile(registerSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);

    //Check if email already exist
    const user = await User.findOne({ email: output.email });
    if (user) {
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "Email is already taken. Please use another email",
          },
        },
        { status: 400 }
      );
    } else {
      // ecrypt the password
      const salt = bcrypt.genSaltSync(10);
      output.password = bcrypt.hashSync(output.password, salt);
      await User.create(output)
      return NextResponse.json(
        {
          status:200,
          message: "User created succesfully!"
        }, { status: 200 });
    }

    
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        {
          status: 400,
          errors: error.messages,
        },
        { status: 400 }
      );
    }
  }
}

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     vine.errorReporter = () => new ErrorReporter();
//     const validator = vine.compile(registerSchema);
//     const output = await validator.validate(body);
//     const salt = bcrypt.genSaltSynnc(10);
//     output.password = bcrypt.hashSync(output.password, salt);
//     return NextResponse.json(output, {status: 200});

//   } catch (error) {
//     if (error instanceof errors.E_VALIDATION_ERROR) {
//       return NextResponse.json(
//         { status: 400, errors: error.messages },
//         { status: 200 }
//       );
//     }
//   }
// }
