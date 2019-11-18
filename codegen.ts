// import * as fs from 'fs';
// import path from 'path';
// import { codegen } from '@graphql-codegen/core';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import * as typescriptResolvers from '@graphql-codegen/typescript-resolvers';
import { printSchema, parse } from 'graphql';
import schema from './src/graph/schema';

const outputFile = 'src/graph/gen-types.ts';
const config = {
    // used by a plugin internally, although the 'typescript' plugin currently
    // returns the string output, rather than writing to a file
    filename: outputFile,
    schema: parse(printSchema(schema)),
    plugins: [
        // Each plugin should be an object
        {
            typescript: {}, // Here you can pass configuration to the plugin
        },
    ],
    pluginMap: {
        typescript: typescriptPlugin,
        // Resolvers plugin not working
        typescriptResolvers: typescriptResolvers,
    },
    ducuments: [],
    // CONFIG required and not implemented correctly
    // config: {
    //     filePath: '',
    //     content: {
    //         definitions: [],
    //         kind: 'Document',
    //     } as DocumentNode,
    // },
};

export default () => {
    console.log(config);
    // codegen(config).then((output: string) => {
    //     fs.writeFile(path.join(__dirname, outputFile), output, () => {
    //         console.log('Outputs generated!');
    //     });
    // });
};
