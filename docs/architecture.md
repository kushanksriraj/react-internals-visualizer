# Architecture of React Internals Visualizer (RIV)

RIV works by following components

### 1. Inspector

In order to know what is going on inside of React, we need a way to detect the changes of data structure we want to inspect, Inspector is the code we add to React and React-DOM library which send messages to Renderer when needed.

### 2. Message Protocol

Message Protocol is the format being used to communicate between Inspector and Anylizer.

### 3. Analyzer

The messages sent from Inspector need to be analyzed accumulatively to construct a presentation of data structures of React internals.

### 4. Renderer

The final step is to render the internals with an easy-to-understand diagram to users.
