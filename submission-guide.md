# Local Verification

Run unit tests:

```bash
npm install
npx jasmine
```

Build Docker image:

```bash
docker build -t tax-calculator .
docker images
docker run -d -p 8080:80 --name tax-calculator tax-calculator
```

Test the container:

Open `http://localhost:8080`

# IBM Cloud Registry

Build and tag:

```bash
docker build -t us.icr.io/$SN_ICR_NAMESPACE/tax-calculator .
```

Push:

```bash
docker push us.icr.io/$SN_ICR_NAMESPACE/tax-calculator
```

# IBM Cloud Code Engine

Deploy manually:

```bash
ibmcloud ce application create --name tax-calculator --image us.icr.io/$SN_ICR_NAMESPACE/tax-calculator --port 80
```

# Tekton

Apply tasks and pipeline:

```bash
oc apply -f tasks.yaml
oc apply -f pipeline.yaml
oc apply -f run.yaml
```

Watch the pipeline run:

```bash
tkn pipelinerun logs -f tax-calculator-pipeline-run
```
